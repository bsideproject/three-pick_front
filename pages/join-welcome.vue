<script setup lang="ts">
import ThreePickLogo from '~/assets/svg/ThreePickLogo.svg?component';
import WelcomeIntroduction from '~/assets/svg/WelcomePicture.svg?component';
</script>
<template>
    <div class="flex flex-col justify-center items-center mt-[112px]">
        <div class="w-[484px]">
            <section class="flex mb-14 justify-center">
                <ThreePickLogo />
            </section>
            <header class="text-[36px] font-bold mb-2 text-center">
                쓰피커가 되신것을 환영해요!
            </header>
            <div class="text-base text-center font-[500]">
                쓰리픽에서는 시간의 가치를 돈으로 환산하여 보여드려요.
            </div>
            <section class="mt-20">
                <header class="text-2xl text-purple7 text-center font-bold">
                    여러분의 한 시간의 가치를 설정해 주세요.
                </header>
                <div class="mt-4 font-base text-center font-[500]">
                    시간을 돈으로 환산하기 위해 한 시간의 가치를 설정해
                    주세요.<br />
                    어떻게 설정해야 할지 막막하신가요?<br />
                    아래 쓰리픽 팀원들은 어떻게 설정했는지 참고해 보세요.
                </div>
                <WelcomeIntroduction class="mt-8" />
            </section>
        </div>
        <section class="w-[100%] mt-10 py-10 px-14 bg-green">TEST</section>
    </div>
</template>

<style lang="scss" scoped></style>
