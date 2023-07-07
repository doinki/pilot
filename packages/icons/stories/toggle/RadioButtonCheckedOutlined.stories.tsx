import type { Meta, StoryObj } from '@storybook/react';

import RadioButtonCheckedOutlined from '../../lib/toggle/RadioButtonCheckedOutlined';

const meta: Meta<typeof RadioButtonCheckedOutlined> = {
  component: RadioButtonCheckedOutlined,
  tags: ['autodocs'],
  title: 'toggle/RadioButtonCheckedOutlined',
};

export default meta;
type Story = StoryObj<typeof RadioButtonCheckedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
