import { Grade, Student } from "@test/targets.models";
import { StudentViewModel } from "@test/targets.viewmodels";
import { mount, nextTick } from "@test/util";
import { VListItem } from "vuetify/components";
import { CInput } from "..";

describe("CInput", () => {
  let model: Student;
  beforeEach(() => {
    model = new StudentViewModel({
      name: "bob",
      grade: Grade.Freshman,
      password: "secretValue",
      email: "bob@college.edu",
      phone: "123-123-1234",
      color: "#ff0000",
      notes: "multiline\n\nstring",
    });
  });

  test.each(["name", "Student.name", new Student().$metadata.props.name])(
    "metadata resolves - %s",
    async (forSpec) => {
      const wrapper = mount(() => <CInput model={model} for={forSpec} />);

      // Assert resting state
      expect(wrapper.find("label").text()).toEqual("Name");
      expect(wrapper.find("input").element.value).toBe("bob");

      // Perform input
      await wrapper.find("input").setValue("steve");
      expect(model.name).toBe("steve");
    }
  );

  test("enum", async () => {
    const wrapper = mount(() => <CInput model={model} for="grade" />);

    // Assert resting state
    expect(wrapper.find("label").text()).toEqual("Grade");
    expect(wrapper.text()).contains("Freshman");

    // Open the dropdown and select the third item.
    // Incredibly annoyingly, VSelect opens on mousedown, not on click.
    // It specifically passes openOnClick=false to VMenu and implements its own mousedown handler.
    await wrapper.find(".v-field").trigger("mousedown");
    await wrapper.findAllComponents(VListItem)[2].trigger("click");

    // The selected value should now be Junior, the third value of the enum
    expect(model.grade).toBe(Grade.Junior);
    expect(wrapper.text()).contains("Junior");
  });

  test.each([true, false])("bool (checkbox: %s)", async (checkbox) => {
    const wrapper = mount(() => (
      <CInput model={model} for="isEnrolled" checkbox={checkbox} />
    ));

    // Assert resting state
    expect(wrapper.find("label").text()).toEqual("Is Enrolled");

    // Click the input
    await nextTick();
    await wrapper.find("input").setValue(true);
    await wrapper.find("input").trigger("input"); // workaround https://github.com/vuejs/test-utils/issues/2014
    await nextTick();

    // Value should now be true
    expect(model.isEnrolled).toBe(true);
  });
});
