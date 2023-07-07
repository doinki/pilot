import type { Meta, StoryObj } from '@storybook/react';

import ExtensionOffOutlined from '../../lib/action/ExtensionOffOutlined';

const meta: Meta<typeof ExtensionOffOutlined> = {
  component: ExtensionOffOutlined,
  tags: ['autodocs'],
  title: 'action/ExtensionOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ExtensionOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
