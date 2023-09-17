/*
 * @Author: EvefyouFE
 * @Date: 2023-07-17 15:46:43
 * @FilePath: \react-evefyou-admin\build\vite\plugins\index.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import WindiCSS from 'vite-plugin-windicss';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const {
    VITE_USE_MOCK,
  } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react(),
    tsconfigPaths({
      ignoreConfigErrors: true
    })
  ];

  // vite-plugin-windicss
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  vitePlugins.push(WindiCSS({
    transformCSS: 'postcss',
    scan: {
      dir: ['src'],
    }
  }));

  // vite-plugin-svgr 将svg转为react组件
  vitePlugins.push(svgr());

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  return vitePlugins;
}
