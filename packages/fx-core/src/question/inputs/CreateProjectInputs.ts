// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/****************************************************************************************
 *                            NOTICE: AUTO-GENERATED                                    *
 ****************************************************************************************
 * This file is automatically generated by script "./src/question/generator.ts".        *
 * Please don't manually change its contents, as any modifications will be overwritten! *
 ***************************************************************************************/

import { Inputs } from "@microsoft/teamsfx-api";

export interface CreateProjectInputs extends Inputs {
  /** @description Teams Toolkit: select runtime for your app */
  runtime?: "node" | "dotnet";
  /** @description New Project */
  "project-type"?: "bot-type" | "tab-type" | "me-type" | "outlook-addin-type";
  /** @description Capabilities */
  capabilities?:
    | "empty"
    | "bot"
    | "notification"
    | "command-bot"
    | "workflow-bot"
    | "tab-non-sso"
    | "sso-launch-page"
    | "dashboard-tab"
    | "tab-spfx"
    | "search-app"
    | "collect-form-message-extension"
    | "search-message-extension"
    | "link-unfurling"
    | "declarative-agent"
    | "custom-copilot-basic"
    | "custom-copilot-rag"
    | "custom-copilot-agent"
    | "message-extension"
    | "BotAndMessageExtension"
    | "TabNonSsoAndBot"
    | "json-taskpane"
    | "office-content-addin";
  /** @description Select triggers */
  "bot-host-type-trigger"?:
    | "http-express"
    | "http-webapi"
    | "http-and-timer-functions"
    | "http-functions"
    | "timer-functions";
  /** @description SharePoint Solution */
  "spfx-solution"?: "new" | "import";
  /** @description SharePoint Framework */
  "spfx-install-latest-package"?: boolean;
  /** @description Framework */
  "spfx-framework-type"?: "react" | "minimal" | "none";
  /** @description Name for SharePoint Framework Web Part */
  "spfx-webpart-name"?: string;
  /** @description SPFx solution folder */
  "spfx-folder"?: string;
  /** @description Architecture of Search Based Message Extension */
  "me-architecture"?: "new-api" | "api-spec" | "bot";
  /** @description Create Declarative Agent */
  "with-plugin"?: "no" | "yes";
  /** @description Create API Plugin */
  "api-plugin-type"?: "new-api" | "api-spec" | "existing-plugin";
  /** @description Import Manifest File */
  "plugin-manifest-path"?: string;
  /** @description Import OpenAPI Description Document */
  "plugin-opeanapi-spec-path"?: string;
  /** @description Authentication Type */
  "api-auth"?: "none" | "api-key" | "bearer-token" | "microsoft-entra" | "oauth";
  /** @description Chat With Your Data */
  "custom-copilot-rag"?:
    | "custom-copilot-rag-customize"
    | "custom-copilot-rag-azureAISearch"
    | "custom-copilot-rag-customApi"
    | "custom-copilot-rag-microsoft365";
  /** @description OpenAPI Description Document */
  "openapi-spec-location"?: string;
  /** @description Select Operation(s) Teams Can Interact with */
  "api-operation"?: string[];
  /** @description AI Agent */
  "custom-copilot-agent"?: "custom-copilot-agent-new" | "custom-copilot-agent-assistants-api";
  /** @description Programming Language */
  "programming-language"?: "javascript" | "typescript" | "csharp" | "python";
  /** @description Service for Large Language Model (LLM) */
  "llm-service"?: "llm-service-azure-openai" | "llm-service-openai";
  /** @description Azure OpenAI Key */
  "azure-openai-key"?: string;
  /** @description Azure OpenAI Endpoint */
  "azure-openai-endpoint"?: string;
  /** @description Azure OpenAI Deployment Name */
  "azure-openai-deployment-name"?: string;
  /** @description OpenAI Key */
  "openai-key"?: string;
  /** @description Application Name */
  "app-name"?: string;
}
