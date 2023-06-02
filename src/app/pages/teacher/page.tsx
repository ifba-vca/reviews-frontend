"use client";

import React from "react";

import { Table } from "@/components";

import * as D from "./data";

const Teacher = () => {
  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-mono text-3xl font-semibold text-primary">
          Semestres
        </h1>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions()}
      />
    </div>
  );
};

export default Teacher;
