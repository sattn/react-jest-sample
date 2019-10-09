import React from 'react';
import { shallow } from 'enzyme';
import Sample from './sample'

test('Message changes the text after click', () => {
    const sample = shallow(<Sample />);
    
    const event = { target: { value: 'test' } };
    // テキストボックスにtestを入力
    sample.find('input').simulate('change', event);
    // ボタン押下
    sample.find('button').simulate('click');
    // メッセージに'OK'が出力されること
    expect(sample.find('p.message').text()).toEqual('OK');
})
