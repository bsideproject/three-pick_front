<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'BasicInput',
    model: {
        prop: 'value',
        event: 'input',
    },
    props: {
        /**
         * Input 값
         */
        value: {
            type: [String, Number],
            default: '',
        },
        /**
         * Input 타입
         */
        variant: {
            type: String,
            default: 'email',
        },
        /**
         * Input 필수 상태
         */
        required: {
            type: Boolean,
            default: false,
        },
        /**
         * 유효성 검사 상태
         */
        validationState: {
            type: String,
            default: 'none',
            required: false,
        },
        /**
         * Input 비활성 여부
         */
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const isFocused = ref(false);

        const inputTitle: Record<string, string> = {
            email: '이메일 주소',
            password: '비밀번호',
            passwordConfirm: '비밀번호 확인',
            nickname: '닉네임',
        };

        const placeholders: Record<string, string> = {
            email: '이메일 주소 입력',
            password: '비밀번호 입력',
            passwordConfirm: '비밀번호 확인',
            nickname: '닉네임 입력',
        };

        const breadcumbText: Record<string, string> = {
            email: '올바른 이메일을 입력해 주세요',
            password:
                '영문, 숫자를 포함한 8자~20자의 비밀번호를 입력해 주세요.',
            passwordConfirm: '비밀번호가 일치하지 않아요. 다시 입력해 주세요.',
            nickname:
                '닉네임은 2자~ 16자까지 입력 가능하며, 특수문자나 공백은 사용이 불가능해요.',
        };

        return {isFocused, inputTitle, placeholders, breadcumbText};
    },
    methods: {
        onInput(event: Event): void {
            const inputEvent = event.target as HTMLInputElement;
            if (inputEvent !== null && 'value' in inputEvent) {
                /**
                 * Input에 값이 입력될 때 `input` 이벤트를 방출합니다.
                 *
                 * `[string, InputEvent]`
                 *
                 * @event input
                 */
                this.$emit('input', inputEvent.value);
            }
        },
        onChange(event: Event): void {
            /**
             * Input이 변경되었을 때 `change` 이벤트를 방출합니다.
             *
             * `[Event]`
             *
             * @event change
             */
            this.$emit('change', event);
        },
        onBlur(event: Event): void {
            this.isFocused = false;

            /**
             * Input이 blur 되었을 때 `blur` 이벤트를 방출합니다.
             *
             * `[Event]`
             *
             * @event blur
             */
            this.$emit('blur', event);
        },
        onFocus(event: FocusEvent): void {
            this.isFocused = true;

            /**
             * Input이 Focus되었을때 'focus' 이벤트 방출
             *
             * @event focus
             */
            this.$emit('focus', event);
        },
    },
});
</script>

<template>
    <div>
        <h3
            :class="{
                'after:content-[\'*\'] after:relative after:text-error after:left-[1px] after:top-[1.5px]':
                    required,
            }"
            class="text-sm mb-[10px]"
        >
            {{ inputTitle[variant] }}
        </h3>
        <input
            v-bind="$attrs"
            :type="variant === 'passwordConfirm' ? 'password' : variant"
            :class="{
                'border-purple': isFocused,
                '!border-error': validationState === 'error',
            }"
            class="border-[1px] rounded-[6px] w-[100%] p-[16px] focus:outline-none mb-0"
            :placeholder="placeholders[variant]"
            :value="value"
            @input="onInput"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
        />
        <p
            v-if="
                variant === 'password' ||
                variant === 'nickname' ||
                (variant === 'email' && validationState === 'error') ||
                (variant === 'passwordConfirm' && validationState === 'error')
            "
            class="mt-[10px] font-medium text-xs text-gray"
            :class="{
                '!text-error': validationState === 'error',
            }"
        >
            {{ breadcumbText[variant] }}
        </p>
    </div>
</template>

<style scoped scss></style>
