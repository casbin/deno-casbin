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

// Logger is the logging interface implementation.
export interface Logger {
  // enableLog controls whether print the message.
  enableLog(enable: boolean): void;

  // isEnable returns if logger is enabled.
  isEnable(): boolean;

  // print formats using the default formats for its operands and logs the message.
  print(...v: any[]): void;

  // printf formats according to a format specifier and logs the message.
  printf(format: string, ...v: any[]): void;
}

// DefaultLogger is the implementation for a Logger
export class DefaultLogger implements Logger {
  private enable = false;

  public enableLog(enable: boolean): void {
    this.enable = enable;
  }

  public isEnable(): boolean {
    return this.enable;
  }

  public print(...v: any[]): void {
    if (this.enable) {
      console.log(...v);
    }
  }

  public printf(format: string, ...v: any[]): void {
    if (this.enable) {
      console.log(format, ...v);
    }
  }
}

let logger: Logger = new DefaultLogger();

// setLogger sets the current logger.
export function setLogger(l: Logger): void {
  logger = l;
}

// getLogger returns the current logger.
export function getLogger(): Logger {
  return logger;
}

// logPrint prints the log.
export function logPrint(...v: any[]): void {
  logger.print(...v);
}

// logPrintf prints the log with the format.
export function logPrintf(format: string, ...v: any[]): void {
  logger.printf(format, ...v);
}
