import type { Meta, StoryObj } from '@storybook/react';

import ExtensionOutlined from '../../lib/action/ExtensionOutlined';

const meta: Meta<typeof ExtensionOutlined> = {
  component: ExtensionOutlined,
  tags: ['autodocs'],
  title: 'action/ExtensionOutlined',
};

export default meta;
type Story = StoryObj<typeof ExtensionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
