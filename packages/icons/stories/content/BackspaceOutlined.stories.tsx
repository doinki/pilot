import type { Meta, StoryObj } from '@storybook/react';

import BackspaceOutlined from '../../lib/content/BackspaceOutlined';

const meta: Meta<typeof BackspaceOutlined> = {
  component: BackspaceOutlined,
  tags: ['autodocs'],
  title: 'content/BackspaceOutlined',
};

export default meta;
type Story = StoryObj<typeof BackspaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
