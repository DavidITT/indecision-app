import {mount} from '@vue/test-utils'
import {describe, expect, test} from 'vitest'
import WrittingMessage from '@/components/WritingMessage.vue'

describe('WritingMessage Component', () => {
    test('Should match snapshot', () => {

        const wrapper = mount(WrittingMessage)

        expect(wrapper.html()).toMatchSnapshot();

    })
})