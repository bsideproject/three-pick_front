<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
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
        default: null,
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
    /**
     * Input placeholder 커스터마이징
     */
    placeholder: {
        type: String,
        required: false,
        default: null,
    },
    /**
     * Input title 커스터마이징
     */
    title: {
        type: String,
        required: false,
        default: null,
    },
});

const isFocused = ref(false);

const inputTitle: Record<string, string> = {
    email: '이메일 주소',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
    nickname: '닉네임',
    goalTitle: '목표명을 입력해주세요.',
};

const placeholders: Record<string, string> = {
    email: '이메일 주소 입력',
    password: '비밀번호 입력',
    passwordConfirm: '비밀번호 확인',
    nickname: '닉네임 입력',
    goalTitle: '오늘의 목표 입력',
};

const breadcumbText: Record<string, string> = {
    email: '올바른 이메일을 입력해 주세요',
    password: '영문, 숫자를 포함한 8자~20자의 비밀번호를 입력해 주세요.',
    passwordConfirm: '비밀번호가 일치하지 않아요. 다시 입력해 주세요.',
    nickname:
        '닉네임은 2자~ 16자까지 입력 가능하며, 특수문자나 공백은 사용이 불가능해요.',
    code: '확인코드는 최대 10분간만 유효해요.',
    codeError: '확인코드가 일치하지 않아요.',
};

/**
 *
 * @param props
 * input의 type을 매핑하는 객체가 있어, 커스텀하여 사용할 수 있도록 하였습니다.
 */
const refinedVariant = (props: string) => {
    const variantMapper: Record<string, string> = {
        email: 'email',
        password: 'password',
        passwordConfirm: 'password',
    };

    return variantMapper[props] ?? 'text';
};

const emit = defineEmits(['input', 'change', 'blur', 'focus']);

const onInput = (event: Event): void => {
    const inputEvent = event.target as HTMLInputElement;
    if (inputEvent !== null && 'value' in inputEvent) {
        /**
         * Input에 값이 입력될 때 `input` 이벤트를 방출합니다.
         *
         * `[string, InputEvent]`
         *
         * @event input
         */
        emit('input', inputEvent.value);
    }
};

const onChange = (event: Event): void => {
    /**
     * Input이 변경되었을 때 `change` 이벤트를 방출합니다.
     *
     * `[Event]`
     *
     * @event change
     */
    emit('change', event);
};

const onBlur = (event: Event): void => {
    isFocused.value = false;

    /**
     * Input이 blur 되었을 때 `blur` 이벤트를 방출합니다.
     *
     * `[Event]`
     *
     * @event blur
     */
    emit('blur', event);
};

const onFocus = (event: FocusEvent): void => {
    isFocused.value = true;

    /**
     * Input이 Focus되었을때 'focus' 이벤트 방출
     *
     * @event focus
     */
    emit('focus', event);
};
</script>

<template>
    <div>
        <h3
            v-if="variant && inputTitle[variant]"
            :class="
                required &&
                `after:content-['*'] after:relative after:text-error after:left-[1px] after:top-[1.5px]`
            "
            class="text-sm mb-[10px]"
        >
            {{ title ?? inputTitle[variant] }}
        </h3>
        <input
            v-bind="$attrs"
            :type="refinedVariant(variant)"
            :class="{
                'border-gray50': !isFocused,
                'border-purple7': isFocused,
                '!border-error': validationState === 'error',
                'text-gray50 bg-gray20 border-none': isDisabled,
            }"
            class="border-[1px] rounded w-[100%] p-[16px] focus:outline-none mb-0"
            :placeholder="placeholder ?? placeholders[variant]"
            :value="value"
            :disabled="isDisabled"
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
                (variant === 'passwordConfirm' &&
                    validationState === 'error') ||
                variant === 'code' ||
                variant === 'codeError'
            "
            class="mt-[10px] font-medium text-xs text-gray50"
            :class="{
                '!text-error': validationState === 'error',
            }"
        >
            {{ breadcumbText[variant] }}
        </p>
    </div>
</template>

<style scoped scss></style>
