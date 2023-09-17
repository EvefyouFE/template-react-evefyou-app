import { ConfigEnv, UserConfig, defineConfig } from 'vite';
import { loadEnv } from 'vite';
import { wrapperEnv } from "./build/utils";
import { createProxy } from "./build/vite/proxy";
import { createVitePlugins } from "./build/vite/plugins";

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);
  console.log('viteEnv', viteEnv)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    optimizeDeps: {
      include: [
        '@iconify/react',
        '@ant-design/colors',
        '@ant-design/icons',
        'antd/locale/en_US',
        'antd/locale/zh_CN',
        'react-evefyou-app/locales/en_US',
        'react-evefyou-app/locales/zh_CN',
      ],
    },
    server: {
      https: false,
      host: true,
      port: VITE_PORT,
      // proxy: createProxy(VITE_PROXY),
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: generateModifyVars()
        }
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  }
})
