import test from "node:test";import assert from "node:assert/strict";import{isLeapYear,daysInYear}from"../src/index.js";
test("leap",()=>{assert.equal(isLeapYear(2024),true);assert.equal(isLeapYear(2000),true);});
test("century",()=>assert.equal(isLeapYear(1900),false));
test("days",()=>assert.equal(daysInYear(2025),365));
