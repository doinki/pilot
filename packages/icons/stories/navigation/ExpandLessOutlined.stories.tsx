import type { Meta, StoryObj } from '@storybook/react';

import ExpandLessOutlined from '../../lib/navigation/ExpandLessOutlined';

const meta: Meta<typeof ExpandLessOutlined> = {
  component: ExpandLessOutlined,
  tags: ['autodocs'],
  title: 'navigation/ExpandLessOutlined',
};

export default meta;
type Story = StoryObj<typeof ExpandLessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
