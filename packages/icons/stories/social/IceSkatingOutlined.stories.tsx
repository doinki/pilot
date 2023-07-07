import type { Meta, StoryObj } from '@storybook/react';

import IceSkatingOutlined from '../../lib/social/IceSkatingOutlined';

const meta: Meta<typeof IceSkatingOutlined> = {
  component: IceSkatingOutlined,
  tags: ['autodocs'],
  title: 'social/IceSkatingOutlined',
};

export default meta;
type Story = StoryObj<typeof IceSkatingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
