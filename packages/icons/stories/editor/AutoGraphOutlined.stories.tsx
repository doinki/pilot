import type { Meta, StoryObj } from '@storybook/react';

import AutoGraphOutlined from '../../lib/editor/AutoGraphOutlined';

const meta: Meta<typeof AutoGraphOutlined> = {
  component: AutoGraphOutlined,
  tags: ['autodocs'],
  title: 'editor/AutoGraphOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoGraphOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
