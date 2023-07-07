import type { Meta, StoryObj } from '@storybook/react';

import DynamicFormOutlined from '../../lib/action/DynamicFormOutlined';

const meta: Meta<typeof DynamicFormOutlined> = {
  component: DynamicFormOutlined,
  tags: ['autodocs'],
  title: 'action/DynamicFormOutlined',
};

export default meta;
type Story = StoryObj<typeof DynamicFormOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
