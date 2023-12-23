"use client";
import React from "react";
import WorkspaceContainer from "@/components/WorkspaceContainer";
import { Provider } from "react-redux";
import store from "@/lib/store";

export default function Home() {
    return (
        <main>
            <Provider store={store}>
                <WorkspaceContainer />
            </Provider>
        </main>
    );
}
