import type { Meta, StoryObj } from '@storybook/react';

import RampRightOutlined from '../../lib/maps/RampRightOutlined';

const meta: Meta<typeof RampRightOutlined> = {
  component: RampRightOutlined,
  tags: ['autodocs'],
  title: 'maps/RampRightOutlined',
};

export default meta;
type Story = StoryObj<typeof RampRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
