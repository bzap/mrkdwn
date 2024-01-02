"use client";
import React from "react";
import WorkspaceContainer from "@/components/WorkspaceContainer";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
export default function Home() {
    return (
        <main className={`w-full h-full border-box`}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <WorkspaceContainer />
                </PersistGate>
            </Provider>
        </main>
    );
}
