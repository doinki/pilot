import type { Meta, StoryObj } from '@storybook/react';

import RadioButtonUncheckedOutlined from '../../lib/toggle/RadioButtonUncheckedOutlined';

const meta: Meta<typeof RadioButtonUncheckedOutlined> = {
  component: RadioButtonUncheckedOutlined,
  tags: ['autodocs'],
  title: 'toggle/RadioButtonUncheckedOutlined',
};

export default meta;
type Story = StoryObj<typeof RadioButtonUncheckedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
