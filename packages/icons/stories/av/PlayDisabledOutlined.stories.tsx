import type { Meta, StoryObj } from '@storybook/react';

import PlayDisabledOutlined from '../../lib/av/PlayDisabledOutlined';

const meta: Meta<typeof PlayDisabledOutlined> = {
  component: PlayDisabledOutlined,
  tags: ['autodocs'],
  title: 'av/PlayDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
