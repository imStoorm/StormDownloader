// preload.js
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value);
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  // Adicionar funções de controle da janela
  minimize() {
    ipcRenderer.send('window-minimize');
  },
  close() {
    ipcRenderer.send('window-close');
  },
  maximize() {
    ipcRenderer.send('window-maximize');
  }
};

contextBridge.exposeInMainWorld('ipc', handler);

export type IpcHandler = typeof handler;
