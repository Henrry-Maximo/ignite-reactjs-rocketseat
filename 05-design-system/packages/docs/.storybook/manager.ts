import { addons, type State } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: themes.dark,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  layoutCustomisations: {
    showSidebar(state: State, defaultValue: boolean) {
      return state.storyId === 'landing' ? false : defaultValue;
    },
    showToolbar(state: State, defaultValue: boolean) {
      return state.viewMode === 'docs' ? false : defaultValue;
    },
  },
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});