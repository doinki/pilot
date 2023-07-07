import type { Meta, StoryObj } from '@storybook/react';

import FindReplaceOutlined from '../../lib/action/FindReplaceOutlined';

const meta: Meta<typeof FindReplaceOutlined> = {
  component: FindReplaceOutlined,
  tags: ['autodocs'],
  title: 'action/FindReplaceOutlined',
};

export default meta;
type Story = StoryObj<typeof FindReplaceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
