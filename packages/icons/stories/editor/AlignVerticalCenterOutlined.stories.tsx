import type { Meta, StoryObj } from '@storybook/react';

import AlignVerticalCenterOutlined from '../../lib/editor/AlignVerticalCenterOutlined';

const meta: Meta<typeof AlignVerticalCenterOutlined> = {
  component: AlignVerticalCenterOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignVerticalCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignVerticalCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
