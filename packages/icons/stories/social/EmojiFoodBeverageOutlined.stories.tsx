import type { Meta, StoryObj } from '@storybook/react';

import EmojiFoodBeverageOutlined from '../../lib/social/EmojiFoodBeverageOutlined';

const meta: Meta<typeof EmojiFoodBeverageOutlined> = {
  component: EmojiFoodBeverageOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiFoodBeverageOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiFoodBeverageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
