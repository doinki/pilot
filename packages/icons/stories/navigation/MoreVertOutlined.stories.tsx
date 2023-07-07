import type { Meta, StoryObj } from '@storybook/react';

import MoreVertOutlined from '../../lib/navigation/MoreVertOutlined';

const meta: Meta<typeof MoreVertOutlined> = {
  component: MoreVertOutlined,
  tags: ['autodocs'],
  title: 'navigation/MoreVertOutlined',
};

export default meta;
type Story = StoryObj<typeof MoreVertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
