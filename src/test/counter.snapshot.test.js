import React from "react";
import Counter from '../counter/Counter'
import { create } from "react-test-renderer";

describe('Snapshop test', ()=>{
    test('testing counter', ()=>{
        let tree=create(<Counter/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
