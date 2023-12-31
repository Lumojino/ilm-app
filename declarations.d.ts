declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.gif' {
    const value: any;
    export default value;
}


declare module 'react-native-deep-linking' {
    export interface Route {
      route: string;
      callback: (response: any) => void;
    }
  
    export default class DeepLinking {
      static addScheme(scheme: string): void;
      static addRoute(route: string, callback: (response: any) => void): void;
      static evaluateUrl(): void;
      static openURL(url: string): void;
    }
  }
  