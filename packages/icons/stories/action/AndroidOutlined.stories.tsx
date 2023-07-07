import type { Meta, StoryObj } from '@storybook/react';

import AndroidOutlined from '../../lib/action/AndroidOutlined';

const meta: Meta<typeof AndroidOutlined> = {
  component: AndroidOutlined,
  tags: ['autodocs'],
  title: 'action/AndroidOutlined',
};

export default meta;
type Story = StoryObj<typeof AndroidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
