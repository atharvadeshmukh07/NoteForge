declare module '@edgestore/react' {
    import { Router } from 'next/router';
  
    export function createEdgeStoreProvider<RouterType = Router>(): {
      EdgeStoreProvider: React.ComponentType;
      useEdgeStore: () => {
        edgestore: any;
      };
    };
  }
  