import type { Meta, StoryObj } from '@storybook/react';

import TurnSlightLeftOutlined from '../../lib/maps/TurnSlightLeftOutlined';

const meta: Meta<typeof TurnSlightLeftOutlined> = {
  component: TurnSlightLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnSlightLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnSlightLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
