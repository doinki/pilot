import type { Meta, StoryObj } from '@storybook/react';

import AlignVerticalBottomOutlined from '../../lib/editor/AlignVerticalBottomOutlined';

const meta: Meta<typeof AlignVerticalBottomOutlined> = {
  component: AlignVerticalBottomOutlined,
  tags: ['autodocs'],
  title: 'editor/AlignVerticalBottomOutlined',
};

export default meta;
type Story = StoryObj<typeof AlignVerticalBottomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
