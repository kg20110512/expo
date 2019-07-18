const GROUPS = {
  Fundamentals: 'Managed Workflow',
  Guides: 'Managed Workflow',
  'Distributing Your App': 'Managed Workflow',
  ExpoKit: 'Managed Workflow',
  'Expo SDK': 'API Reference',
  'React Native': 'API Reference',
  Introduction: 'Get Started',
  Essentials: 'Bare Workflow',
};

const ROOT = [
  'Introduction',
  'Fundamentals',
  'Guides',
  'Distributing Your App',
  // 'Tutorials',
  'ExpoKit',
  'Essentials',
  'Expo SDK',
  'React Native Basics',
  'React Native Guides',
  'React Native Components',
  'React Native APIs',
];

const INTRODUCTION = [
  'Getting to know Expo',
  'Installation',
  'Managed and Bare Workflows',
  'XDE Tour',
  'Project Lifecycle',
  'Community',
  'Additional Resources',
  'Troubleshooting Proxies',
  'Frequently Asked Questions',
  'Already used React Native?',
];

const GUIDES = [
  'Account Permissions',
  'App Icons',
  'Assets',
  'Error Handling',
  'Preloading & Caching Assets',
  'Icons',
  'Custom Fonts',
  'Using Custom Fonts',
  'Routing & Navigation',
  'Configuring StatusBar',
  'Create a Splash Screen',
  'Offline Support',
  'Configuring OTA Updates',
  'Push Notifications',
  'Using FCM for Push Notifications',
  'Notification Channels',
  'Testing with Jest',
  'Using TypeScript',
  'Using Modern JavaScript',
  'Using ClojureScript',
  'Using Firebase',
  'Using GraphQL',
  'Using Sentry',
  'Using Bugsnag',
  'User Interface Component Libraries',
  'Crafting Educational Materials',
];

const FUNDAMENTALS = [
  'Managed Workflow Walkthrough',
  'Up and Running',
  'Expo CLI',
  'Viewing Logs',
  'Debugging',
  'Development Mode',
  'Common Development Errors',
  'iOS Simulator',
  'Android Studio Emulator',
  'Configuration with app.json',
  'Publishing',
  'Release Channels',
  'Building Standalone Apps',
  'Upgrading Expo SDK Walkthrough',
  'Linking',
  'How Expo Works',
  'Glossary of terms',
  'exp Command-Line Interface',
];

const DISTRIBUTION = [
  'Overview',
  'Building Standalone Apps',
  'App signing',
  'Deploying to App Stores',
  'Release Channels',
  'Advanced Release Channels',
  'Hosting An App on Your Servers',
  'Building Standalone Apps on Your CI',
  'Uploading Apps to the Apple App Store and Google Play',
  'App Transfers',
  'Security',
];

const EXPOKIT = [
  'Overview',
  'Detaching to ExpoKit',
  'Ejecting to ExpoKit',
  'Developing With ExpoKit',
  'Advanced ExpoKit Topics',
  'Universal Modules and ExpoKit',
];

const ESSENTIALS = ['Bare Workflow Walkthrough', 'Up and Running', 'Supported Expo SDK APIs'];

const REACT_NATIVE = [
  // 'REACT NATIVE BASICS',
  'Learn the Basics',
  'Props',
  'State',
  'Style',
  'Height and Width',
  'Layout with Flexbox',
  'Handling Text Input',
  'Handling Touches',
  'Using a ScrollView',
  'Using List Views',
  'Networking',

  // 'REACT NATIVE GUIDES',
  'Platform Specific Code',
  'Navigating Between Screens',
  'Images',
  'Animations',
  'Accessibility',
  'Timers',
  'Performance',
  'Gesture Responder System',
  'JavaScript Environment',
  'Direct Manipulation',
  'Color Reference',

  // 'REACT NATIVE COMPONENTS',
  'ActivityIndicator',
  'Button',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'FlatList',
  'Image',
  'InputAccessoryView',
  'KeyboardAvoidingView',
  'ListView',
  'MaskedViewIOS',
  'Modal',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'RefreshControl',
  'SafeAreaView',
  'ScrollView',
  'SectionList',
  'SegmentedControlIOS',
  'Slider',
  'SnapshotViewIOS',
  'StatusBar',
  'Switch',
  'TabBarIOS.Item',
  'TabBarIOS',
  'Text',
  'TextInput',
  'ToolbarAndroid',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
  'VirtualizedList',
  'WebView',

  // 'REACT NATIVE APIS',
  'AccessibilityInfo',
  'ActionSheetIOS',
  'Alert',
  'AlertIOS',
  'Animated',
  'AppState',
  'AsyncStorage',
  'BackAndroid',
  'BackHandler',
  'Clipboard',
  'DatePickerAndroid',
  'Dimensions',
  'Easing',
  'Image Style Props',
  'ImageStore',
  'InteractionManager',
  'Keyboard',
  'Layout Props',
  'LayoutAnimation',
  'ListViewDataSource',
  'NetInfo',
  'PanResponder',
  'PixelRatio',
  'Settings',
  'Shadow Props',
  'Share',
  'StatusBarIOS',
  'StyleSheet',
  'Systrace',
  'Text Style Props',
  'TimePickerAndroid',
  'ToastAndroid',
  'Transforms',
  'Vibration',
  'VibrationIOS',
  'View Style Props',
];

module.exports = {
  ROOT,
  GROUPS,
  INTRODUCTION,
  FUNDAMENTALS,
  ESSENTIALS,
  GUIDES,
  DISTRIBUTION,
  EXPOKIT,
  REACT_NATIVE,
};
