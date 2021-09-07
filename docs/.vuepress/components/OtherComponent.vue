<template>
  <div>
    <a-space direction="vertical">
      <el-row>
        <el-button size="medium">默认按钮</el-button>
        <el-button type="primary" size="medium">主要按钮</el-button>
        <el-button type="success" size="medium">成功按钮</el-button>
        <el-button type="info" size="medium">信息按钮</el-button>
        <el-button type="warning" size="medium">警告按钮</el-button>
        <el-button type="danger" size="medium">危险按钮</el-button>
      </el-row>
      <div>
        <a-button type="primary">
          Primary
        </a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">
          Dashed
        </a-button>
        <a-button type="danger">
          Danger
        </a-button>
        <a-config-provider :auto-insert-space-in-button="false">
          <a-button type="primary">
            按钮
          </a-button>
        </a-config-provider>
        <a-button type="primary">
          按钮
        </a-button>
        <a-button type="link">
          Link
        </a-button>
      </div>
    </a-space>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
