import type { Meta, StoryObj } from '@storybook/react';

import NordicWalkingOutlined from '../../lib/social/NordicWalkingOutlined';

const meta: Meta<typeof NordicWalkingOutlined> = {
  component: NordicWalkingOutlined,
  tags: ['autodocs'],
  title: 'social/NordicWalkingOutlined',
};

export default meta;
type Story = StoryObj<typeof NordicWalkingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
