import type { Meta, StoryObj } from '@storybook/react';

import SportsKabaddiOutlined from '../../lib/social/SportsKabaddiOutlined';

const meta: Meta<typeof SportsKabaddiOutlined> = {
  component: SportsKabaddiOutlined,
  tags: ['autodocs'],
  title: 'social/SportsKabaddiOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsKabaddiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
