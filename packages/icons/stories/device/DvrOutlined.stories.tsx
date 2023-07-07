import type { Meta, StoryObj } from '@storybook/react';

import DvrOutlined from '../../lib/device/DvrOutlined';

const meta: Meta<typeof DvrOutlined> = {
  component: DvrOutlined,
  tags: ['autodocs'],
  title: 'device/DvrOutlined',
};

export default meta;
type Story = StoryObj<typeof DvrOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
