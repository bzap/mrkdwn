"use client";
import React, { useEffect } from "react";
import WorkspaceContainer from "@/components/WorkspaceContainer";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
export default function Home() {
    return (
        <main className="bg-stone-100 w-screen h-screen">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <WorkspaceContainer />
                </PersistGate>
            </Provider>
        </main>
    );
}
