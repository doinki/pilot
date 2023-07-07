import type { Meta, StoryObj } from '@storybook/react';

import ExpandOutlined from '../../lib/action/ExpandOutlined';

const meta: Meta<typeof ExpandOutlined> = {
  component: ExpandOutlined,
  tags: ['autodocs'],
  title: 'action/ExpandOutlined',
};

export default meta;
type Story = StoryObj<typeof ExpandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
