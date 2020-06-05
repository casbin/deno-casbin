// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Adapter } from "./adapter.ts";
import { Model } from "../model/model.ts";
import { Helper } from "./helper.ts";
import { arrayToString, readFile, writeFile } from "../util/util.ts";

/**
 * FileAdapter is the file adapter for Casbin.
 * It can load policy from file or save policy to file.
 */
export class FileAdapter implements Adapter {
  protected readonly filePath: string;

  /**
   * FileAdapter is the constructor for FileAdapter.
   * @param {string} filePath filePath the path of the policy file.
   */
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  public async loadPolicy(model: Model): Promise<void> {
    if (!this.filePath) {
      // throw new Error('invalid file path, file path cannot be empty');
      return;
    }
    await this.loadPolicyFile(model, Helper.loadPolicyLine);
  }

  private async loadPolicyFile(
    model: Model,
    handler: (line: string, model: Model) => void,
  ): Promise<void> {
    const bodyBuf = await readFile(this.filePath);
    const lines = bodyBuf.toString().split("\n");
    lines.forEach((n: string, index: number) => {
      const line = n.trim();
      if (!line) {
        return;
      }
      handler(n, model);
    });
  }

  /**
   * savePolicy saves all policy rules to the storage.
   */
  public async savePolicy(model: Model): Promise<boolean> {
    if (!this.filePath) {
      // throw new Error('invalid file path, file path cannot be empty');
      return false;
    }
    let result = "";

    const pList = model.model.get("p");
    if (!pList) {
      return false;
    }
    pList.forEach((n) => {
      n.policy.forEach((m) => {
        result += n.key + ", ";
        result += arrayToString(m);
        result += "\n";
      });
    });

    const gList = model.model.get("g");
    if (!gList) {
      return false;
    }
    gList.forEach((n) => {
      n.policy.forEach((m) => {
        result += n.key + ", ";
        result += arrayToString(m);
        result += "\n";
      });
    });

    await this.savePolicyFile(result.trim());
    return true;
  }

  private async savePolicyFile(text: string): Promise<void> {
    await writeFile(this.filePath, text);
  }

  /**
   * addPolicy adds a policy rule to the storage.
   */
  public async addPolicy(
    sec: string,
    ptype: string,
    rules: string[][],
  ): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * removePolicy removes a policy rule from the storage.
   */
  public async removePolicy(
    sec: string,
    ptype: string,
    rule: string[][],
  ): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * removeFilteredPolicy removes policy rules that match the filter from the storage.
   */
  public async removeFilteredPolicy(
    sec: string,
    ptype: string,
    fieldIndex: number,
    ...fieldValues: string[]
  ): Promise<void> {
    throw new Error("not implemented");
  }
}
