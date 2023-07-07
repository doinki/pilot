import type { Meta, StoryObj } from '@storybook/react';

import FormatListBulletedOutlined from '../../lib/editor/FormatListBulletedOutlined';

const meta: Meta<typeof FormatListBulletedOutlined> = {
  component: FormatListBulletedOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatListBulletedOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatListBulletedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
