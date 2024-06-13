"use client"

import { type EdgestoreRouter } from "../app/api/edgestore/[...edgestore]/route"
import { createEdgeStoreProvider } from "@edgestore/react"

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgestoreRouter>()
export { EdgeStoreProvider, useEdgeStore }