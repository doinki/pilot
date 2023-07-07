import type { Meta, StoryObj } from '@storybook/react';

import ThreeSixtyOutlined from '../../lib/maps/ThreeSixtyOutlined';

const meta: Meta<typeof ThreeSixtyOutlined> = {
  component: ThreeSixtyOutlined,
  tags: ['autodocs'],
  title: 'maps/ThreeSixtyOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeSixtyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
