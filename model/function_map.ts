// Copyright 2020 The casbin Authors. All Rights Reserved.
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

import {
  globMatch,
  ipMatch,
  keyMatch,
  keyMatch2,
  keyMatch3,
  keyMatch4,
  regexMatch,
} from "../util/builtin_operators.ts";

// FunctionMap represents the collection of Function.
export class FunctionMap {
  private functions: Map<string, any> = new Map<string, any>();

  // loadFunctionMap loads an initial function map.
  public static loadFunctionMap(): FunctionMap {
    const fm = new FunctionMap();

    fm.addFunction("keyMatch", keyMatch);
    fm.addFunction("keyMatch2", keyMatch2);
    fm.addFunction("keyMatch3", keyMatch3);
    fm.addFunction("keyMatch4", keyMatch4);
    fm.addFunction("regexMatch", regexMatch);
    fm.addFunction("ipMatch", ipMatch);
    fm.addFunction("globMatch", globMatch);

    return fm;
  }

  // addFunction adds an expression function.
  public addFunction(name: string, func: any): void {
    if (!this.functions.get(name)) {
      this.functions.set(name, func);
    }
  }

  // getFunctions return all functions.
  public getFunctions(): any {
    return this.functions;
  }
}
