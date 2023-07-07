import type { Meta, StoryObj } from '@storybook/react';

import TurnSlightRightOutlined from '../../lib/maps/TurnSlightRightOutlined';

const meta: Meta<typeof TurnSlightRightOutlined> = {
  component: TurnSlightRightOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnSlightRightOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnSlightRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
