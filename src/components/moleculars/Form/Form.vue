<template>
  <form class="w-full flex flex-col items-start gap-2" @submit.prevent="submitHandler()" title="Form">
    <label for="email">Email</label>
    <input id="email" class="border px-4 py-2 outline-none rounded-xl w-full" type="email" name="email" v-model="emailRef" />
    <span v-if="errorEmailRef" class="text-red-500">{{ errorEmailRef }}</span>
    <label for="debouncing">Debouncing Field</label>
    <input id="debouncing" class="border px-4 py-2 outline-none rounded-xl w-full" type="text" name="debouncing" @input="debouncingInput" />
    <span v-if="errorDebouncingRef" class="text-red-500">{{ errorDebouncingRef }}</span>
    <label for="field1">Field1</label>
    <input id="field1" class="border px-4 py-2 outline-none rounded-xl w-full" type="text" name="field1" v-model="field1Ref" />
    <span v-if="errorField1Ref" class="text-red-500">{{ errorField1Ref }}</span>
    <label for="field2">Field2</label>
    <input id="field2" class="border px-4 py-2 outline-none rounded-xl w-full" type="number" name="field2" v-model="field2Ref" />
    <span v-if="errorField2Ref" class="text-red-500">{{ errorField2Ref }}</span>
    <div class="flex items-center gap-4">
      <label for="field3-option-1">Yes</label>
      <input id="field3-option-1" class="border px-4 py-2 outline-none rounded-xl" type="radio" name="field3-yes" value="yes" v-model="field3Ref" />
      <label for="field3-option-2">No</label>
      <input id="field3-option-2" class="border px-4 py-2 outline-none rounded-xl" type="radio" name="field3-no" value="no" v-model="field3Ref" />
      <span v-if="errorField3Ref" class="text-red-500">{{ errorField3Ref }}</span>
    </div>
    <div class="flex items-center gap-4">
      <label for="field4">Field4</label>
      <input id="field4" class="border px-4 py-2 outline-none rounded-xl" type="checkbox" name="field4" v-model="field4Ref" />
      <span v-if="errorField4Ref" class="text-red-500">{{ errorField4Ref }}</span>
    </div>
    <label for="field5">Field5</label>
    <textarea id="field5" class="border px-4 py-2 outline-none rounded-xl w-full" name="field5" v-model="field5Ref" />
    <div class="flex items-center gap-4">
      <button type="submit" class="border px-4 py-2 outline-none rounded-xl">Submit</button>
      <span v-if="errorForm" class="text-red-500">{{ errorForm }}</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import * as _ from "lodash";

const emailRef = ref<string>("");
const debouncingRef = ref<string>("");
const field1Ref = ref<string>("");
const field2Ref = ref<number>(0);
const field3Ref = ref<string>("");
const field4Ref = ref<boolean>(false);
const field5Ref = ref<string>("");
const submitOnce = ref<boolean>(false);

const errorEmailRef = computed<string>(() => {
  if (submitOnce.value) {
    return isEmail(emailRef.value) ? "" : "Invalid email address"
  } else {
    return ""
  }
});
const errorDebouncingRef = computed(() => {
  if (submitOnce.value) {
    if (isEmpty(debouncingRef.value)) {
      return "Debouncing field is required";
    } else if (debouncingRef.value.length > 20) {
      return "Too long, should be equal to 20 or less";
    } else if (debouncingRef.value.length < 5) {
      return "Too long, should be equal to 5 or more";
    } else {
      return "";
    }
  } else {
    return "";
  }
});
const errorField1Ref = computed(() => {
  if (submitOnce.value) {
    return isEmpty(field1Ref.value) ? "Field1 is required" : "";
  } else {
    return "";
  }
});
const errorField2Ref = computed(() => {
  if (submitOnce.value) {
    if (field2Ref.value > 100) {
      return "Too big, should be equal to 100 or less than"
    } else if (field2Ref.value < 10) {
      return "Too small, should be equal to 10 or more than"
    } else {
      return ""
    }
  } else {
    return "";
  }
});
const errorField3Ref = computed(() => {
  if (submitOnce.value) {
    if (field3Ref.value === "") {
      return "Should pick `Yes` or `No`"
    } else {
      return ""
    }
  } else {
    return ""
  }
});
const errorField4Ref = computed(() => {
  if (submitOnce.value) {
    if (field4Ref.value) {
      return ""
    } else {
      return "Field4 is required"
    }
  } else {
    return ""
  }
});
const errorForm = computed(() => {
  if (submitOnce.value) {
    if (errorEmailRef.value || errorDebouncingRef.value || errorField1Ref.value || errorField2Ref.value || errorField3Ref.value || errorField4Ref.value) {
      return "Failed to validate"
    } else {
      return ""
    }
  } else {
    return ""
  }
});

const debouncingInput = _.debounce((e) => {
  debouncingRef.value = e.target.value as string;
}, 500)
const submitHandler = () => {
  submitOnce.value = true;
  alert("Submit");
};
</script>
