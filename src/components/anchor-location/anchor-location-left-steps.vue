<template>
    <div class="anchor-location-left-steps">
        <el-steps
            :space="60"
            direction="vertical"
            :active="steps.active"
            process-status="finish"
            finish-status="wait"
        >
            <el-step
                v-for="(item, index) in steps.step"
                :key="item.title"
                :title="item.title"
                @click.native="jump(index)"
            ></el-step>
        </el-steps>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    mounted: function() {},
    props: ["steps", "top"],
    methods: {
        smoothDown(distance, total, step) {
            if (distance < total) {
                distance += step;
                // Firefox
                document.documentElement.scrollTop = distance;
                // Chrome
                document.body.scrollTop = distance;
                setTimeout(this.smoothDown(distance, total, step), 10);
            } else {
                document.documentElement.scrollTop = total;
                document.body.scrollTop = total;
                window.pageYOffset = total;
            }
        },
        smoothUp(distance, total, step) {
            if (distance > total) {
                distance -= step;
                // Firefox
                document.documentElement.scrollTop = distance;
                // Chrome
                document.body.scrollTop = distance;
                setTimeout(this.smoothUp(distance, total, step), 10);
            } else {
                document.documentElement.scrollTop = total;
                document.body.scrollTop = total;
                window.pageYOffset = total;
            }
        },
        jump(index) {
            // 用 class="d_jump" 添加锚点
            this.steps.active = index;
            let jump = document.querySelectorAll(".d_jump");
            let total = jump[index].offsetTop;
            console.log("纵坐标", total);
            let distance =
                document.documentElement.scrollTop || document.body.scrollTop;
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            let step = total / 50;
            if (total > distance) {
                this.smoothDown(distance, total, step);
            } else {
                let newTotal = distance - total + 100;
                step = newTotal / 50;
                this.smoothUp(distance, total, step);
            }
        }
    }
};
</script>

<style>
.left-steps {
    margin: 20px 0 0 0;
}

.left-steps .el-step__head {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.left-steps .el-step__title {
    font-size: 12px;
    line-height: 26px;
    cursor: pointer;
}

.left-steps .el-step__icon {
    line-height: 20px;
    font-size: 12px;
}

.left-steps .el-step.is-vertical .el-step__main {
    padding-left: 8px;
}

.left-steps .el-step__line.is-vertical {
    top: 24px;
    left: 11px;
}

/*设置步骤条样式*/
</style>
